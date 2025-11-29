
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, CreditCard, Users, Plus, TrendingUp, Calendar, ChevronRight, Package } from 'lucide-react';
import { motion } from 'framer-motion';



function Dashboard({ ListUsers, listSellers, listProducts, listOrders, dashboard }) {
  const idUser = localStorage.getItem('idUser');

  if (!idUser) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Please Login first</h2>
            <Link to="/login" className="px-6 py-2 bg-emerald-600 text-white rounded-full">Go to Login</Link>
        </div>
    )
  }

  const userTarget = ListUsers.find(item => item.id === idUser);
  const sellerTarget = userTarget ? listSellers.find(item => item.id === userTarget.sellerId) : null;

  // Safety check if user data is incomplete
  if (!userTarget || !sellerTarget) {
    return <div className="pt-32 text-center">Loading User Data...</div>;
  }

  const productsTarget = sellerTarget.productIds.map(pid =>
    listProducts.find(p => p.id === pid)
  ).filter(Boolean);

  const ordersTarget = listOrders.filter(o => 
    o.sellerId === sellerTarget.id
  );
  
  const d = new Date();

  const calculateTotalEarnings = (orders) => {
    return orders
      .filter(order => order.isPaid === true)
      .reduce((total, order) => total + order.totalPrice, 0);
  };

  const calculateOrdersPending = (orders) => {
    return orders
      .filter(order => order.status === "Pending")
      .length;
  };

  function formatShortDate(dateStr) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date(dateStr);
    const month = months[d.getMonth()];
    const day = d.getDate();
    return `${month} ${day}`;
  }

  const getStatusColor = (status) => {
      switch(status) {
          case 'Delivered': return 'bg-emerald-100 text-emerald-700';
          case 'Pending': return 'bg-yellow-100 text-yellow-700';
          case 'Shipped': return 'bg-blue-100 text-blue-700';
          case 'Cancelled': return 'bg-red-100 text-red-700';
          default: return 'bg-gray-100 text-gray-700';
      }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">{dashboard.title}</h1>
            <p className="text-gray-500 mt-1">{dashboard.welcome}</p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-0.5"
          >
            <Plus size={20} />
            {dashboard.add_product}
          </motion.button>
        </div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {/* Earnings Card */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                <LayoutDashboard size={24} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-1">{calculateTotalEarnings(ordersTarget)} <span className="text-sm font-medium text-gray-400">MAD</span></h4>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                {dashboard.total_earnings}
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full ml-2 font-medium">{dashboard.month}</span>
              </p>
            </div>
          </motion.div>

          {/* Pending Orders Card */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                <ShoppingBag size={24} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-1">{calculateOrdersPending(ordersTarget)}</h4>
              <p className="text-sm text-gray-500">{dashboard.orders_pending}</p>
            </div>
          </motion.div>

          {/* Visits Card */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <Users size={24} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-1">1.2K</h4>
              <p className="text-sm text-gray-500">{dashboard.store_visits}</p>
            </div>
          </motion.div>

          {/* Subscription Card */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                <CreditCard size={24} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-1">{sellerTarget.subscription.type} Plan</h4>
              <p className="text-sm text-gray-500">
                {dashboard.active_plan} <span className="font-medium text-gray-700">{formatShortDate(sellerTarget.subscription.endDate)}</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Recent Orders Table */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">{dashboard.recent_orders}</h3>
            <button className="text-sm text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1">
                View All <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-gray-500 text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">{dashboard.table.id}</th>
                  <th className="px-6 py-4 font-semibold">{dashboard.table.customer}</th>
                  <th className="px-6 py-4 font-semibold">{dashboard.table.date}</th>
                  <th className="px-6 py-4 font-semibold">{dashboard.table.total}</th>
                  <th className="px-6 py-4 font-semibold">{dashboard.table.status}</th>
                  <th className="px-6 py-4 font-semibold text-right">{dashboard.table.action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ordersTarget.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-gray-900">
                        <span className="font-mono text-gray-500">#{item.id}</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                {item.customerName.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-700">{item.customerName}</span>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                        {formatShortDate(item.date)}, {d.getFullYear()}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                        {item.totalPrice} MAD
                    </td>
                    <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                            {item.status}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <Link to="#" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium hover:underline">
                            {dashboard.table.details}
                        </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {ordersTarget.length === 0 && (
              <div className="p-10 text-center text-gray-400 flex flex-col items-center">
                  <Package size={48} className="mb-4 opacity-50" />
                  <p>No orders found for this seller.</p>
              </div>
          )}
        </motion.div>

      </div>
    </div>
  )
}

export default Dashboard;

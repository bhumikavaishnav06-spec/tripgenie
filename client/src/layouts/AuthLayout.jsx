function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100">
      {children}
    </div>
  );
}

export default AuthLayout;
import Header from "@/components/Header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="relative">{children}</div>
    </>
  );
}

export default AuthLayout
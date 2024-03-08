import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import OrderPage from "@/components/order/order";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Order = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Order" />
      <div className="flex flex-col gap-10">
        <OrderPage />
      </div>
    </DefaultLayout>
  );
};

export default Order;

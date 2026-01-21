import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft } from "lucide-react";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-linear-to-br from-red-400 to-orange-500 rounded-full p-4">
            <XCircle className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 text-lg">
          Your payment was cancelled. No charges have been made to your account.
        </p>

        <div className="bg-linear-to-r from-orange-100 to-yellow-100 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            If you encountered any issues during checkout, please try again or
            contact our support team for assistance.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/#pricing" className="block">
            <Button className="w-full bg-linear-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Try Again
            </Button>
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          Need help? Contact our support team at support@mediamixer.com
        </p>
      </div>
    </div>
  );
};

export default PaymentCancel;

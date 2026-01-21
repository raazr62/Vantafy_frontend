import { useEffect } from "react";
import { Link } from "react-router";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const PaymentSuccess = () => {
  useEffect(() => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-linear-to-br from-green-400 to-emerald-500 rounded-full p-4 animate-bounce">
            <CheckCircle2 className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Payment Successful!
        </h1>

        <p className="text-gray-600 text-lg">
          Thank you for your subscription! Your payment has been processed
          successfully.
        </p>

        <div className="bg-linear-to-r from-purple-100 to-orange-100 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            You now have access to all premium features. Start exploring your
            dashboard!
          </p>
        </div>

        <Link to="/dashboard" className="block">
          <Button className="w-full bg-linear-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Go to Dashboard
          </Button>
        </Link>

        <p className="text-xs text-gray-500">
          A confirmation email has been sent to your registered email address.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;

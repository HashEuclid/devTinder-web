import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Preminum = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);
  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });

    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };

  const handleByClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );

    // It should open the Razorpay dialog box

    const { amount, keyId, currency, notes, orderId } = order.data;

    const options = {
      key: keyId, // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: "Dev Tinder",
      description: "Connect to other developers",
      order_id: orderId, // This is the order_id created in the backend
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      handler: verifyPremiumUser,
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return isUserPremium ? (
    "You're already a premium user"
  ) : (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Membership</h1>
          <ul>
            <li> - Chat with Other People</li>
            <li> - 100 Connection Requests per day</li>
            <li> - Blue Tick</li>
            <li> - 3 Months</li>
          </ul>
          <button
            onClick={() => handleByClick("silver")}
            className="btn btn-secondary"
          >
            Buy Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Gold Membership</h1>
          <ul>
            <li> - Chat with Other People</li>
            <li> - Infinite Connection Requests per day</li>
            <li> - Blue Tick</li>
            <li> - 6 Months</li>
          </ul>
          <button
            onClick={() => handleByClick("gold")}
            className="btn btn-primary"
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preminum;

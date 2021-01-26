import { useEffect, useRef, useState } from "react";
// import icon from "../img/cart-placeholder.png";

const PayPal = () => {
    const paypal = useRef();
    const [error, setError] = useState(undefined);

    useEffect(() => {
        window.paypal
            .Buttons({
                creatOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "some item",
                                amount: {
                                    currency: "EUR",
                                    value: 650.0,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions, err) => {
                    const order = await actions.order.caputre();
                    console.log("Paypal order success: ", order);
                },
                onError: (err) => {
                    setError(err);
                    console.log("product load unsuccessful: ", err);
                },
            })
            .render(paypal.current);
    }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default PayPal;

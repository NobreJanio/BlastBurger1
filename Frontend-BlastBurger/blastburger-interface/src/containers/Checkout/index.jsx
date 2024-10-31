import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import stripePromise from '../../config/stripePromise';
import CheckoutForm from '../../components/Stripe/CheckoutForm';

export function Checkuot() {
    const {
        state: { clientSecret },
    } = useLocation();

    if (!clientSecret) {
        return <div> Ocorreu algo inesperado, volte e tenta novamente </div>;
    }

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    );
}
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51QEup5LI8mpcDP2XQWyJZBC3G992EBJwHTb43pkDKkfQP3NPRa9VrIJTamTDwoDiyrH0F5RPB8TU0ePudsAIPvfl00Rv7U9tzL',
    {
        // Configuração para evitar warnings em desenvolvimento
        stripeAccount: undefined,
    }
);

export default stripePromise;
const calculatePayment = ({ amount, apr, term, payment }) => {
  apr /= 1200;
  term *= 12;
  payment =
    (amount * (apr * Math.pow(1 + apr, term))) / (Math.pow(1 + apr, term) - 1);
  payment = '$' + payment.toFixed(2);

  return payment;
};

export default calculatePayment;

const emailValidationFunc = (email: string): boolean => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email.toLowerCase());
};

export default emailValidationFunc;

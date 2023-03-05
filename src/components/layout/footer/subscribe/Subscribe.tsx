import Button from "@/components/UI/Button";
import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <h2 className="subscribe__title">
        Get the freshest Compigen news letter
      </h2>
      <form className="subscribe__form">
        <input
          type="email"
          placeholder="Email*"
          className="subscribe__form__input"
        />
        <Button>Subscribe</Button>
      </form>
    </section>
  );
};

export default Subscribe;

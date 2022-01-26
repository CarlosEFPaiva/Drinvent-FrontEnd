/* eslint-disable no-console */
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import styled from "styled-components";

export default class CreditCardForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  sendPaymentData = () => {
    const now = new Date();
    const actualYear = Number(now.getFullYear().toString().slice(2, 4));
    const actualMonth = now.getMonth() + 1;
    let error = [];

    if (this.state.number?.replaceAll("_", "").length !== 19) {
      error.push("Número de cartão inválido");
    }

    if (this.state.name.length < 5) {
      error.push("O nome deve ter pelo menos 5 caracteres");
    }

    if (
      (this.state.expiry.replace("/", "").replace("_", "").length !== 4) ||
      ((Number(this.state.expiry.replace("/", "").slice(2, 4)) === actualYear) && (Number(this.state.expiry.replace("/", "").slice(0, 2)) < actualMonth)) ||
      (Number(this.state.expiry.replace("/", "").slice(2, 4)) < actualYear) ||
      (Number(this.state.expiry.replace("/", "").slice(0, 2)) === 0) ||
      (Number(this.state.expiry.replace("/", "").slice(0, 2)) > 12)
    ) {
      error.push("Validade do cartão inválida ou expirada");
    }
    const cvcLength = this.state.cvc.replaceAll("_", "").length;
    if (cvcLength !== 3 && cvcLength !== 4) {
      error.push("O CVC deve ter 3 ou 4 dígitos");
    }

    if (error.length > 0) {
      return error.forEach((e) => {
        return toast.error(e);
      });
    }

    this.props.confirmPayment();
  }

  render() {
    return (
      <Payment>
        <form onSubmit={e => {
          e.preventDefault();
          this.sendPaymentData();
        }}>
          <div className="wrapper">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
            <div className="inputWrapper">
              <InputMask
                mask="9999 9999 9999 9999"
                className="long"
                type="text"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <h2>E.g.: 49..., 51..., 36... 37...</h2>
              <InputMask
                className="long"
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <div>
                <InputMask
                  mask="99/99"
                  className="medium"
                  type="text"
                  name="expiry"
                  placeholder="Valid Thru (MM/YY)"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <InputMask
                  mask="9999"
                  className="short"
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
          </div>
          <button type="submit">FINALIZAR PAGAMENTO</button>
        </form>
      </Payment>
    );
  }
}

const Payment = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    color: #cecece;
    width: 100%;

    .wrapper {
      display: flex;

      .inputWrapper {
        margin-left: 30px;

        input {
          border: 1px solid #929292;
          outline: none;
          border-radius: 5px;
          padding: 10px;
          margin: 5px;
          font-size: 18px;

          ::placeholder {
            color: #929292;
          }

          ::-webkit-outer-spin-button,
          ::-webkit-inner-spin-button {
            display: none;
          }
        }

        .long {
          width: 85%;
        }

        .medium {
          width: 53%;
        }

        .short {
          width: 30%;
        }
      }
    }

    h2 {
        font-size: 16px;
        margin-left: 15px;
        margin-bottom: 5px;
      }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      width: 182px;
      height: 37px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      border: none;
      outline: none;
      margin-top: 45px;
      background: #E0E0E0;
      cursor: pointer;
    }
  }
`;

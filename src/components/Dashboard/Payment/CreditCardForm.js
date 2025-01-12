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
    issuer: "",
  };

  numberPattern = (cardIssuer) => {
    const nonStandardPatterns = [
      { issuer: "amex", mask: "9999 999999 99999", length: 15, example: "34... 51... 78..." },
      { issuer: "dinersclub", mask: "9999 999999 9999", length: 14, example: "36... 51... 78..." },
    ];
    const standardPattern = { mask: "9999 9999 9999 9999", length: 16, example: "49... 51... 36... 37..." };
    const finalPattern = nonStandardPatterns.find(({ issuer }) => issuer === cardIssuer) || standardPattern;
    return finalPattern;
  }

  cvcPattern = (cardIssuer) => {
    const nonStandardPatterns = [
      { issuer: "amex", mask: "9999", length: 4 },
      { issuer: "discover", mask: "9999", length: 4 },
    ];
    const standardPattern = { mask: "999", length: 3 };
    const finalPattern = nonStandardPatterns.find(({ issuer }) => issuer === cardIssuer) || standardPattern;
    return finalPattern;
  }

  handleCallback = ({ issuer }) => {
    this.setState({ issuer });
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
    const numberPattern = this.numberPattern(this.state.issuer);
    const cvcPattern = this.cvcPattern(this.state.issuer);
    let error = [];
    
    if (this.state.number?.replaceAll("_", "").replaceAll(" ", "").length !== numberPattern.length) {
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
    if (cvcLength !== cvcPattern.length) {
      error.push(`O CVC para este cartão deve ter ${cvcPattern.length} dígitos`);
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
              callback={this.handleCallback}
            />
            <div className="inputWrapper">
              <InputMask
                mask={this.numberPattern(this.state.issuer).mask}
                className="long"
                type="text"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <h2>E.g.: { this.numberPattern(this.state.issuer).example}</h2>
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
                  mask={this.cvcPattern(this.state.issuer).mask}
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
          <button type="submit" disabled={this.props.loading}>FINALIZAR PAGAMENTO</button>
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
        color: #333;
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

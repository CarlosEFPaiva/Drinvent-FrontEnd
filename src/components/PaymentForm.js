import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import InputMask from "react-input-mask";
import styled from "styled-components";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    userId: "",
    userEmail: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Payment>
        <form>
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
                  mask="999"
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
      text-align: center;
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

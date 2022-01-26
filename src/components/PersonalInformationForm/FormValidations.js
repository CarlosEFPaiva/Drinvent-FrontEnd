const validations = {
  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Digite um nome válido",
    },
  },

  cpf: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) === 14,
      message: "Digite um CPF válido",
    },
  },

  phone: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) >= 13,
      message: "Digite um telefone válido",
    },
  },

  cep: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) === 9,
      message: "Digite um CEP válido",
    },
  },

  city: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Digite uma cidade",
    },
  },

  neighborhood: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Digite um bairro",
    },
  },

  street: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Digite uma rua",
    },
  },

  state: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Selecione um estado",
    },
  },

  birthday: {
    custom: {
      isValid: (value) => !isNaN(new Date(value?.split("-").reverse().join("-"))) && isOlderThan18(new Date(value?.split("-").reverse().join("-"))),
      message: "Selecione uma data de aniversário válida - Você deve ser maior de idade",
    },
  },

  number: {
    custom: {
      isValid: (value) => Number(value) > 0,
      message: "Digite um número válido",
    },
  },
};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}

function isOlderThan18(birthday) {
  const today = new Date();
  const hadBirthdayThisYear = (
    today.getMonth() > birthday.getMonth() ||
    (
      today.getMonth() === birthday.getMonth() &&
      today.getDate() >= birthday.getDate()
    )
  );
  const age = (today.getFullYear() - birthday.getFullYear() - (hadBirthdayThisYear ? 0 : 1));
  return age >= 18;
}

let Alert = CustomAlert || {
  Alert_Has_Alert: false,
  Alert_Show_On_Load: false,
  Alert_type: null,
  Alert_Title: "",
  Alert_Text: "",
  Alert_Has_Ok: false,
  Alert_Ok_Button_text: "",
  Alert_Has_Cancel: false,
  Alert_Cancel_Button_text: "",
  Alert_Has_Other: false,
  Alert_Other_Button_text: "",
  Alert_Other_function: "",
  Alert_Has_Time_Up: false,
  Alert_Time_Up: 0,
};

const SetCustomAlert = (CustomAlert) => {
  Alert = CustomAlert || {
    Alert_Has_Alert: false,
    Alert_Show_On_Load: false,
    Alert_type: null,
    Alert_Title: "",
    Alert_Text: "",
    Alert_Has_Ok: false,
    Alert_Ok_Button_text: "",
    Alert_Has_Cancel: false,
    Alert_Cancel_Button_text: "",
    Alert_Has_Other: false,
    Alert_Other_Button_text: "",
    Alert_Other_function: "",
    Alert_Has_Time_Up: false,
    Alert_Time_Up: 0,
  };
  ShowAlert();
};

document.head.insertAdjacentHTML(
  "beforeend",
  '<link rel="stylesheet" href="./alerts/css/alert.css">'
);

if (Alert !== null) {
  console.log(Alert);
}

const CreateAlertCode = () => {
  let code = `<section id="alert">
        <div id="alert-body">
            <h1 id="alert-title">${Alert.Alert_Title}</h1>
            <p id="alert-text">${Alert.Alert_Text}</p>`;
  switch (Alert.Alert_type) {
    case "Error":
      code += `
            <img id="alert-image" src="./alerts/img/Error.gif" alt="Un Simbolo de Equiz de color rojo ">`;
      break;
    case "Success":
      code += `
            <img id="alert-image" src="./alerts/img/Success.gif" alt="Un Simbolo de check de color verde ">`;
      break;
    case "Advice":
      code += `
            <img id="alert-image" src="./alerts/img/Advice.gif" alt="Un Simbolo de Peligro de color Amarillo ">`;
      break;
    case "Loading":
      code += `
            <img id="alert-image" src="./alerts/img/Loading.gif" alt="Un Simbolo en forma de circulo girando ">`;
      break;
    default:
      break;
  }
  if (Alert.Alert_Has_Ok || Alert.Alert_Has_Cancel || Alert.Alert_Has_Other) {
    code += `
            <div id="alert-buttons-container">`;
    if (Alert.Alert_Has_Ok) {
      code += `
                <button class="alert-ok-button" onclick="CloseAlert()">${Alert.Alert_Ok_Button_text}</button>`;
    }

    if (Alert.Alert_Has_Other) {
      code += `
                <button class="alert-other-button" onclick="${Alert.Alert_Other_function}">${Alert.Alert_Other_Button_text}</button>`;
    }
    if (Alert.Alert_Has_Cancel) {
      code += `
                <button class="alert-cancel-button" onclick="CloseAlert()">${Alert.Alert_Cancel_Button_text}</button>`;
    }
    code += `
            </div>`;
  } else {
    Alert.Alert_Has_Time_Up = true;
    Alert.Alert_Time_Up = 2500;
  }
  code += `
        </div>
    </section>`;

  console.log(code);

  return code;
};

getalertElement = () => {
  return (alertElement = document.getElementById("alert"));
};

const ShowAlert = () => {
  CloseAlert();
  const code = CreateAlertCode();
  document.body.insertAdjacentHTML("afterbegin", code);
  if (Alert.Alert_Has_Time_Up) {
    setTimeout(CloseAlert, Alert.Alert_Time_Up);
  }
};

const CloseAlert = () => {
  if (getalertElement()) {
    alertElement.remove();
  }
};

if (Alert.Alert_Has_Alert && Alert.Alert_Show_On_Load) {
  ShowAlert();
}

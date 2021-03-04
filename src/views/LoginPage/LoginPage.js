import React, { useState } from "react";
import { useDispatch } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

//template
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

//Curtom
import { useForm } from "hooks/useForm";
import { statLoginEmailPassword } from "actions/auth";
import { startGoogleLogin } from "actions/auth";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  //definiciones de hooks
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const dispatch = useDispatch();
  
  // Hace que aparezca el card del formulario
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  //Estilos
  const classes = useStyles();
  
  //Informacion de formularios
  const [ formValues, handleInputsChanges ] = useForm({
    email: "raico@gmail.com",
    password: "123"
  });
  const { email, password } = formValues;

  //Envio de infiormacion a redux
  const handleSubmitForm = (e) => {
    e.preventDefault()
    dispatch( statLoginEmailPassword(email, password) )
  }

  //login Google
  const handleGoogleLogin = (e) => {
    dispatch( startGoogleLogin() )
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Cotizador Viajamas"
        rightLinks={<HeaderLinks />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={ handleSubmitForm }>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={ handleGoogleLogin }
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>De la forma clásica</p>
                  <CardBody>
                    <CustomInput
                      labelText="Correo..."
                      id="email"
                      onChange={ handleInputsChanges }
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: email,
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Contraseña"
                      id="pass"
                      onChange={ handleInputsChanges }
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: password,
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" type="submit"  size="lg">
                      Enviar
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

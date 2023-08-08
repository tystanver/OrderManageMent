import { useState } from "react";
import { fetchSingleData } from "@/components/home/homeSection/dataFetch/FetchData";
import { Alert, CircularProgress, Dialog, Snackbar, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { useFormik } from "formik";
import validationSchema from "/components/foodDetailsPage/validationSchemaForOrderForm/OrderForm";
import { selectedProductStore } from "../store/selectedProductStore";
// import { parseCookies, setCookie } from "next-cookies";
import {shallow} from 'zustand/shallow'

const Order = () => {

  const [products,setProduct] =
  selectedProductStore(
      (state) => [
        state.products,
        state.setProduct,
      ],
      shallow
    )
    console.log(products)

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const [item, setItem] = useState(1);
  const Increase = () => {
    const newItem = item + 1;
    setItem(newItem);
  };
  const Decrease = () => {
    if (item > 1) {
      const newItem = item - 1;
      setItem(newItem);
    }
  };
  let total = 0;
  const calculateTotalPrice = (quantity, price) => {
    const vat = 0.1;
    const shipingFee = 100;

    let subTotal = quantity > 1 ? quantity * price : price;

    if (quantity > 1) {
      price = price * 1.1;
      subTotal = quantity * price;
    }

    const vatAmount = subTotal * vat;
    total = subTotal + shipingFee + vatAmount;
    return total;
  };

  const totalPrice = calculateTotalPrice(item, 100);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      First_name: "",
      Last_name: "",
      Phone_number: "",
      Email_address: "",
      address: "",
      note: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data, { resetForm }) => {
      try {
        console.log(data);
        setIsFormSubmitted(true);
        // resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data, isLoading } = useQuery(["single"], () =>
    fetchSingleData(router.query.id)
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  const { strMeal, strInstructions, strMealThumb } = data.meals[0];
  console.log(data.meals);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    const isFormValid =
      Object.keys(errors).length === 0 &&
      values.First_name &&
      values.Last_name &&
      values.Phone_number &&
      values.address;
  
    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }
  
    if (!isFormSubmitted) {
      alert("You have to Submit The form");
      return;
    }
  
    const newData = {
      id: router.query.id,
      item: strMeal,
      quantity: item,
      price: 100,
      totalPrice: total,
      firstName: values.First_name,
      lastName: values.Last_name,
      phoneNumber: values.Phone_number,
      emailAddress: values.Email_address,
      address: values.address,
      note: values.note,
    };
    setSnackbarOpen(true);
    setProduct(newData);
  };

  return (
    <div>
      <section className="container mx-auto grid grid-cols-3">
        <div className="col-span-1">
          <Image
            className="w-full mt-2 rounded-lg"
            src={strMealThumb}
            alt="tan"
            width={200}
            height={150}
          />
          <h1 className="text-center font-bold text-4xl mt-3">{strMeal}</h1>
          <p className="text-center font-bold mt-2">{strInstructions}</p>
          <div className="mt-4 flex items-center justify-center">
            <button
              className=" text-[#4C8488]
          text-[18px] lg:px-8 px-4 lg:py-4 py-2 rounded-[30px] border 
           border-[#4C8488]
          font-medium hover:bg-[#4C8488] hover:text-white mb-5"
              onClick={handleOpen}
            >
              Order Now
            </button>
            <Dialog
              fullWidth
              maxWidth="lg"
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <section className=" px-5">
                <form
                  className={`mt-[30px] grid grid-cols-2 ${
                    isFormSubmitted ? "was-validated" : ""
                  }  gap-[30px]`}
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete="off"
                >
                  <div className=" ">
                    <h1 className="text-2xl">Your Billing Address</h1>
                    <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
                      <TextField
                        value={values.First_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        name="First_name"
                        label="First Name"
                        error={
                          (touched.First_name && errors.First_name) ||
                          (isFormSubmitted && !values.First_name)
                        }
                        helperText={touched.First_name && errors.First_name}
                      />
                      <TextField
                        fullWidth
                        label="Last Name"
                        value={values.Last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="Last_name"
                        error={touched.Last_name && errors.Last_name}
                        helperText={touched.Last_name && errors.Last_name}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-[30px] lg:mt-[30px] mt-4">
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="Phone_number"
                        value={values.Phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.Phone_number && errors.Phone_number}
                        helperText={touched.Phone_number && errors.Phone_number}
                      />
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Email_address}
                        label="Email Address"
                        name="Email_address"
                        error={touched.Email_address && errors.Email_address}
                        helperText={
                          touched.Email_address && errors.Email_address
                        }
                      />
                    </div>
                    <div className="mt-[30px] w-full">
                      <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        error={touched.address && errors.address}
                        helperText={touched.address && errors.address}
                        multiline
                        rows={3}
                      />
                    </div>
                    <div className="mt-[30px]">
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label=" Order Note"
                        name="note"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.note}
                        error={touched.note && errors.note}
                        helperText={touched.note && errors.note}
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mt-5 lg:mt-0 col-span-2 ">
                      <div>
                        <h1 className="text-2xl text-center lg:text-left">
                          Your Order Summary
                        </h1>
                        <div className="rounded-[15px] bg-slate-500 bg-opacity-10 lg:p-8 p-3 mt-[30px]">
                          <div className="flex justify-between pb-6 items-center border-b-2 border-3">
                            <p className="">Item name</p>
                            <p>Price</p>
                          </div>
                          <div className="flex justify-between items-center border-b-2 pb-6 mt-6">
                            <div className="space-y-6">
                              <p className="text-xl font-medium">{strMeal}</p>

                              <p>Shipping Fee</p>
                              <p>VAT</p>
                            </div>
                            <div className="space-y-6 font-medium">
                              <p>$100.00</p>
                              <p>$100</p>
                              <p>10%</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center pb-6 mt-6">
                            <p className="font-medium text-lg">Total</p>
                            <p className="font-medium">
                              $ {parseInt(totalPrice)}
                            </p>
                          </div>
                          <div>
                            <div className="lg:flex gap-[30px] lg:mt-[30px] mt-4 items-center ">
                              <div className="flex gap-4 items-center mt-4 lg:mt-0">
                                <div>
                                  <p className="text-xl font-medium ">
                                    Quantity:
                                  </p>
                                </div>
                                <div className="flex border items-center px-4 py-4 justify-between rounded-[30px] w-[196px] ">
                                  <div
                                    onClick={Decrease}
                                    className="text-2xl cursor-pointer"
                                  >
                                    -
                                  </div>
                                  <p>{item}</p>
                                  <div
                                    onClick={Increase}
                                    className="text-2xl cursor-pointer"
                                  >
                                    +
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6">
                              <button
                                onClick={handleButtonClick}
                                type="submit"
                                className="text-center text-white text-lg font-medium rounded-[30px] hover:text-[#4C8488]
        bg-[#4C8488] py-4 w-full hover:border hover:border-[#4C8488] hover:bg-white"
                              >
                                Confirm
                              </button>
                              <Snackbar
                                open={snackbarOpen}
                                autoHideDuration={6000}
                                onClose={handleCloseSnackbar}
                              >
                                <Alert
                                  onClose={handleCloseSnackbar}
                                  severity="success"
                                  variant="filled"
                                >
                                  Your Order has been confirmed
                                </Alert>
                              </Snackbar>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </Dialog>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Order;

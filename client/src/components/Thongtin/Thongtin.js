import React, { useEffect } from "react";
import './Thongtin.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {getuserById, removeUserById, saveUser,} from "../../actions/UserAction";
import { useHistory, useParams } from "react-router-dom";



function Thongtin(props) {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { userInfo } = useSelector((state) => state.userSignin);
  const onSubmit = async (data) => {

    let formData = new FormData();

    formData.append("_id",userInfo._id);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("address", data.address);
    formData.append("phone", data.phone);
    await dispatch(saveUser(formData));
    
    history.push("/");
  };

  return (
    <div className="user-createUser">
      <span>Update  User</span>
      {userInfo ? (
        <form
          className="user-create-user"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <input
            {...register("name")}
            placeholder="Name"
            defaultValue={userInfo.name}
            
          ></input>
           
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            defaultValue={userInfo.email}
            
          ></input>
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            defaultValue={userInfo.password}
            
          ></input>
          <input
            {...register("address")}
            placeholder="Address"
            type="text"
            defaultValue={userInfo.address}
            
          ></input>
          <input
            {...register("phone")}
            placeholder="Phone"
            type="number"
            defaultValue={userInfo.phone}
           
          ></input>

          <button type="submit">Update thông tin </button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default Thongtin;

import {React} from "react";
import { Addnote } from "./Addnote";
import { Fetchnote } from "./Fetchnote";


export const Home = () => {
  return (
    <div className="container my-3">
      <Addnote/>
      <Fetchnote/>
    </div>
  );
};

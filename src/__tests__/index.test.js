import React from "react";
// import ReactDOM from "react-dom";
// import { departure_date_testing } from "./info_helper";
import moment from "moment";
import{moment_run} from  '../EditPage/momentHelper.js'



describe('moment_run()', () => {
  test("departure_date_testing returns true when departure_date is shown", () => {
    expect(moment_run("2014-04-26T01:32:21.196Z")).toMatch("2014-04-25")})})

import { server_link } from "./server_config";
export const api_1=server_link+"/fraudbusters/activity/";
export const api_3 = (customer_id,count)=>server_link+"/fraudbusters/customer/"+customer_id+"/activites?activitycount="+count
export const api_2 = (customer_id)=>server_link+"/fraudbusters/customer"/+customer_id+"/risk-decision";

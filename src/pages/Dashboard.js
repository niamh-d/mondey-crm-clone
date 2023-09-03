import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import TicketCard from "../components/TicketCard";
import CategoriesContext from "../context";

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);
  const { categories, setCategories } = useContext(CategoriesContext);

  const myFunc = async () => {
    const response = await axios.get("http://localhost:8000/tickets");

    const dataObj = response.data.data;

    const keysArr = Object.keys(dataObj);
    const dataArr = Object.keys(dataObj).map((key) => dataObj[key]);

    const formattedArr = [];
    keysArr.forEach((key, index) => {
      const formattedData = { ...dataArr[index] };
      formattedData["documentId"] = key;
      formattedArr.push(formattedData);
    });
    console.log(formattedArr);
    setTickets(formattedArr);
  };

  useEffect(() => {
    myFunc();
  }, []);

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))]);
  }, []);

  const colors = [
    "rgb(186,255,255)",
    "rgb(186,255,201)",
    "rgb(255,179,186)",
    "rgb(255,223,286)",
    "rgb(255,255,186)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="dashboard">
      <h1>Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, ticketIndex) => (
                  <TicketCard
                    key={ticketIndex}
                    id={ticketIndex}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;

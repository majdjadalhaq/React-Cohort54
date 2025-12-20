import React, { useState, useEffect } from 'react';
import Person from './Person';

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      const result = data.results[0];
      
      const cleanPerson = {
        first_name: result.name.first,
        last_name: result.name.last,
        email: result.email,
      };
      
      setPerson(cleanPerson);
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
};

export default PersonController;

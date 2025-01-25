let slotsData = [
  { id: "slot1", time: "9:00 AM - 10:00 AM", capacity: 3 },
  { id: "slot2", time: "10:00 AM - 11:00 AM", capacity: 3 },
  { id: "slot3", time: "11:00 AM - 12:00 PM", capacity: 3 }
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(slotsData),
    headers: {
      "Content-Type": "application/json"
    }
  };
};

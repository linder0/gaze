let slotsData = [
  { id: "slot1", time: "9:00 AM - 10:00 AM", capacity: 3 },
  { id: "slot2", time: "10:00 AM - 11:00 AM", capacity: 3 },
  { id: "slot3", time: "11:00 AM - 12:00 PM", capacity: 3 }
];

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, slotId } = JSON.parse(event.body);
    if (!name || !email || !slotId) {
      return { statusCode: 400, body: "Missing required fields" };
    }

    const slot = slotsData.find((s) => s.id === slotId);
    if (!slot) {
      return { statusCode: 404, body: "Slot not found" };
    }

    if (slot.capacity > 0) {
      slot.capacity -= 1;
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: "Booking confirmed" })
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: false, message: "Slot is full" })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Server error" })
    };
  }
};

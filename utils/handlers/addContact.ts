import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.NEXT_PUBLIC_MAILJET_API_KEY,
  apiSecret: process.env.NEXT_PUBLIC_MAILJET_SECRET_KEY,
});

export const addContactToList = async (email: string, listId: number) => {
  const request = mailjet
    .post("contact")
    .id(email)
    .action("managecontactslists")
    .request({
      ContactsLists: [
        {
          ListID: listId,
          Action: "addnoforce",
        },
      ],
    });

  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};

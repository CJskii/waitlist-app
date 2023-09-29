import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.NEXT_PUBLIC_MAILJET_API_KEY,
  apiSecret: process.env.NEXT_PUBLIC_MAILJET_SECRET_KEY,
});

export async function removeFromContactList(email: string, listId: number) {
  const request = mailjet
    .post("contact")
    .id(email)
    .action("managecontactslists")
    .request({
      ContactsLists: [
        {
          ListID: listId,
          Action: "unsub",
        },
      ],
    });

  return request
    .then((result) => {
      console.log(`Removed ${email} from the list!`);
    })
    .catch((err) => {
      console.error(err.statusCode);
      throw err;
    });
}

// import nodemailer from 'nodemailer'

// import config from './config'

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     type: 'OAuth2',
//     // ...config
//   }
// });

// const send = ({ email, name, text }) => {
//   const from = name && email ? `${name} <${email}>` : `${name || email}`
//   const message = {
//     from,
//     to: '407seth@gmail.com',
//     subject: `New message from ${from} at creating-contact-forms-with-nodemailer-and-react`,
//     text,
//     replyTo: from
//   };

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     )
//   })
// }

// export default send








import nodemailer from 'nodemailer'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const transporter = nodemailer.createTransport({
   // host: 'smtp.intranet',
   //  port: '25'
});

const send = ({ email, name }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: '407seth@gmail.com',
    subject: `New message from ${from} at MCG Kiosk`,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send

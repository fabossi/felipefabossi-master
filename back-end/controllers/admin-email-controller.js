require('dotenv').config()
exports.sendAdminEmail = (email, message) => {
  "use strict";
  const nodemailer = require("nodemailer");

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true, // true for 465, false for other ports
      requireTLS: true,
      port: 465,
      auth: {
        user: process.env.user_email, // generated ethereal user
        pass: process.env.user_password // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${email}`, // sender address
      to: process.env.user_email, // list of receivers
      subject: "Alguem te enviou email caraio.", // Subject line
      text: `${message}`, // plain text body
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
      <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width" name="viewport"/>
      <!--[if !mso]><!-->
      <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-->
      <!--<![endif]-->
      <style type="text/css">
          body {
            margin: 0;
            padding: 0;
          }

          table,
          td,
          tr {
            vertical-align: top;
            border-collapse: collapse;
          }

          * {
            line-height: inherit;
          }

          a[x-apple-data-detectors=true] {
            color: inherit !important;
            text-decoration: none !important;
          }

          .ie-browser table {
            table-layout: fixed;
          }

          [owa] .img-container div,
          [owa] .img-container button {
            display: block !important;
          }

          [owa] .fullwidth button {
            width: 100% !important;
          }

          [owa] .block-grid .col {
            display: table-cell;
            float: none !important;
            vertical-align: top;
          }

          .ie-browser .block-grid,
          .ie-browser .num12,
          [owa] .num12,
          [owa] .block-grid {
            width: 500px !important;
          }

          .ie-browser .mixed-two-up .num4,
          [owa] .mixed-two-up .num4 {
            width: 164px !important;
          }

          .ie-browser .mixed-two-up .num8,
          [owa] .mixed-two-up .num8 {
            width: 328px !important;
          }

          .ie-browser .block-grid.two-up .col,
          [owa] .block-grid.two-up .col {
            width: 246px !important;
          }

          .ie-browser .block-grid.three-up .col,
          [owa] .block-grid.three-up .col {
            width: 246px !important;
          }

          .ie-browser .block-grid.four-up .col [owa] .block-grid.four-up .col {
            width: 123px !important;
          }

          .ie-browser .block-grid.five-up .col [owa] .block-grid.five-up .col {
            width: 100px !important;
          }

          .ie-browser .block-grid.six-up .col,
          [owa] .block-grid.six-up .col {
            width: 83px !important;
          }

          .ie-browser .block-grid.seven-up .col,
          [owa] .block-grid.seven-up .col {
            width: 71px !important;
          }

          .ie-browser .block-grid.eight-up .col,
          [owa] .block-grid.eight-up .col {
            width: 62px !important;
          }

          .ie-browser .block-grid.nine-up .col,
          [owa] .block-grid.nine-up .col {
            width: 55px !important;
          }

          .ie-browser .block-grid.ten-up .col,
          [owa] .block-grid.ten-up .col {
            width: 60px !important;
          }

          .ie-browser .block-grid.eleven-up .col,
          [owa] .block-grid.eleven-up .col {
            width: 54px !important;
          }

          .ie-browser .block-grid.twelve-up .col,
          [owa] .block-grid.twelve-up .col {
            width: 50px !important;
          }
        </style>
      <style id="media-query" type="text/css">
          @media only screen and (min-width: 520px) {
            .block-grid {
              width: 500px !important;
            }

            .block-grid .col {
              vertical-align: top;
            }

            .block-grid .col.num12 {
              width: 500px !important;
            }

            .block-grid.mixed-two-up .col.num3 {
              width: 123px !important;
            }

            .block-grid.mixed-two-up .col.num4 {
              width: 164px !important;
            }

            .block-grid.mixed-two-up .col.num8 {
              width: 328px !important;
            }

            .block-grid.mixed-two-up .col.num9 {
              width: 369px !important;
            }

            .block-grid.two-up .col {
              width: 250px !important;
            }

            .block-grid.three-up .col {
              width: 166px !important;
            }

            .block-grid.four-up .col {
              width: 125px !important;
            }

            .block-grid.five-up .col {
              width: 100px !important;
            }

            .block-grid.six-up .col {
              width: 83px !important;
            }

            .block-grid.seven-up .col {
              width: 71px !important;
            }

            .block-grid.eight-up .col {
              width: 62px !important;
            }

            .block-grid.nine-up .col {
              width: 55px !important;
            }

            .block-grid.ten-up .col {
              width: 50px !important;
            }

            .block-grid.eleven-up .col {
              width: 45px !important;
            }

            .block-grid.twelve-up .col {
              width: 41px !important;
            }
          }

          @media (max-width: 520px) {

            .block-grid,
            .col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }

            .block-grid {
              width: 100% !important;
            }

            .col {
              width: 100% !important;
            }

            .col>div {
              margin: 0 auto;
            }

            img.fullwidth,
            img.fullwidthOnMobile {
              max-width: 100% !important;
            }

            .no-stack .col {
              min-width: 0 !important;
              display: table-cell !important;
            }

            .no-stack.two-up .col {
              width: 50% !important;
            }

            .no-stack .col.num4 {
              width: 33% !important;
            }

            .no-stack .col.num8 {
              width: 66% !important;
            }

            .no-stack .col.num4 {
              width: 33% !important;
            }

            .no-stack .col.num3 {
              width: 25% !important;
            }

            .no-stack .col.num6 {
              width: 50% !important;
            }

            .no-stack .col.num9 {
              width: 75% !important;
            }

            .video-block {
              max-width: none !important;
            }

            .mobile_hide {
              min-height: 0px;
              max-height: 0px;
              max-width: 0px;
              display: none;
              overflow: hidden;
              font-size: 0px;
            }

            .desktop_hide {
              display: block !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
      <style id="media-query-bodytag" type="text/css">
      @media (max-width: 520px) {
        .block-grid {
          min-width: 320px!important;
          max-width: 100%!important;
          width: 100%!important;
          display: block!important;
        }
        .col {
          min-width: 320px!important;
          max-width: 100%!important;
          width: 100%!important;
          display: block!important;
        }
        .col > div {
          margin: 0 auto;
        }
        img.fullwidth {
          max-width: 100%!important;
          height: auto!important;
        }
        img.fullwidthOnMobile {
          max-width: 100%!important;
          height: auto!important;
        }
        .no-stack .col {
          min-width: 0!important;
          display: table-cell!important;
        }
        .no-stack.two-up .col {
          width: 50%!important;
        }
        .no-stack.mixed-two-up .col.num4 {
          width: 33%!important;
        }
        .no-stack.mixed-two-up .col.num8 {
          width: 66%!important;
        }
        .no-stack.three-up .col.num4 {
          width: 33%!important
        }
        .no-stack.four-up .col.num3 {
          width: 25%!important
        }
      }
      </style>
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; border-collapse: collapse;" valign="top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
      <div style="background-color:#303030;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#303030;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:20px; padding-bottom:20px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top;;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#FFFFFF;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:120%;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;">
      <div style="line-height: 14px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; color: #FFFFFF;">
      <p style="line-height: 26px; font-size: 12px; margin: 0;"><span style="font-size: 22px;"><strong>Hey Felipe, ${email}, enviou uma mensagem!!</strong></span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:#f3f3f3;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f3f3;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:10px; padding-bottom:10px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top;;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:10px; padding-right: 10px; padding-left: 10px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 60px; padding-left: 60px; padding-top: 60px; padding-bottom: 60px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:200%;padding-top:60px;padding-right:60px;padding-bottom:60px;padding-left:60px;">
      <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 24px; color: #555555;">
      <p style="font-size: 14px; line-height: 36px; text-align: center; margin: 0;"><span style="font-size: 18px;">${message}</span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:#2d2d2d;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#2d2d2d;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:25px; padding-bottom:25px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top;;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; border-collapse: collapse;" valign="top">
      <table activate="activate" align="center" alignment="alignment" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: undefined; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" to="to" valign="top">
      <tbody>
      <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
      <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 3px; padding-left: 3px; border-collapse: collapse;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://fabossi.s3-sa-east-1.amazonaws.com/facebook.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; height: auto; float: none; border: none; display: block;" title="Facebook" width="32"/></a></td>
      <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 3px; padding-left: 3px; border-collapse: collapse;" valign="top"><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=[ShareOn]" target="_blank"><img alt="LinkedIn" height="32" src="https://fabossi.s3-sa-east-1.amazonaws.com/linkedin%402x.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; height: auto; float: none; border: none; display: block;" title="LinkedIn" width="32"/></a></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#bbbbbb;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:120%;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
      <div style="line-height: 14px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; color: #bbbbbb;">
      <p style="line-height: 16px; text-align: center; font-size: 12px; margin: 0;"><span style="font-size: 14px;">Felipe Fabossi Feedback Email.</span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
      </body>
      </html>`
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(error => console.error(error));
}

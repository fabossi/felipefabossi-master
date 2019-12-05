FROM node:8
WORKDIR /home/back-end
ADD . /home/back-end
RUN npm install
# ENV PORT=3000

# GMAIL CONFIGURATIONS

ENV user_email=fabossif@gmail.com
ENV user_password=BrennerMalie95785

#Mongodb CREDENTIALS

ENV url_mongo=mongodb+srv://root:Tm8nWYRGUsevZCTV@fabossi-website-7jcsx.mongodb.net/Fabossi-website
ENV user_mongo=root
ENV password_mongo=Tm8nWYRGUsevZCTV

ENV JWT_KEY=Jh~8y)3i7[NFSn|?Dts{6WXm2Z=E$g]w
ENV PORT=4000

EXPOSE 4000
CMD ["node", "app.js"]

# Temel imaj
FROM node:18

# Çalışma dizini
WORKDIR /app

# Dosyaları kopyala
COPY . .

# Bağımlılıkları yükle
RUN npm install

# Admin paneli için build
RUN npm run build

# Port belirle
EXPOSE 1337

# Uygulamayı başlat
CMD ["npm", "run", "start"]

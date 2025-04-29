import React from "react";
import Header from "../components/Header";
import GradientLine from "../components/GradientLine";
import { Container, Typography, Box } from "@mui/material";

const Help: React.FC = () => {
  return (
    <Box>
      <Header />
      <GradientLine />
      <Container sx={{ py: 6, maxWidth: 800 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4 }}
        >
          Yardım
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7 }}>
          <b>VoyageXpert Seyahat Uygulaması</b> ile hayalinizdeki tatili kolayca
          planlayabilir, en uygun otel ve tur seçeneklerine ulaşabilirsiniz.
          Uygulamamız, kullanıcı dostu arayüzü ve zengin içerikleriyle seyahat
          deneyiminizi en üst seviyeye çıkarmak için tasarlanmıştır.
          <br />
          <br />
          <b>Nasıl Kullanılır?</b>
          <br />
          Ana sayfada yer alan arama kutusunu kullanarak otel, tur veya yurt
          dışı seçeneklerini filtreleyebilir, dilediğiniz tarih ve kişi sayısına
          göre arama yapabilirsiniz. Favori oteller ve popüler seyahat noktaları
          bölümlerinden ilham alabilir, detay sayfalarından rezervasyon
          işlemlerinizi başlatabilirsiniz.
          <br />
          <br />
          <b>Sık Karşılaşılan Seyahat Sorunları ve Çözümleri</b>
          <br />
          <ul>
            <li>
              <b>Rezervasyon Onayı Gelmedi:</b> Rezervasyon işleminizden sonra
              e-posta adresinizi ve spam klasörünüzü kontrol edin. Hala onay
              gelmediyse, müşteri hizmetlerimizle iletişime geçebilirsiniz.
            </li>
            <li>
              <b>Otel veya Turda Değişiklik Yapmak:</b> Rezervasyonunuzu
              uygulama üzerinden veya çağrı merkezimizden kolayca
              güncelleyebilirsiniz.
            </li>
            <li>
              <b>Ödeme Sorunları:</b> Kredi kartı bilgilerinizin doğruluğunu
              kontrol edin. Sorun devam ederse bankanızla iletişime geçin veya
              farklı bir ödeme yöntemi deneyin.
            </li>
            <li>
              <b>İptal ve İade:</b> Rezervasyon iptal ve iade koşulları,
              seçtiğiniz otel veya turun politikalarına göre değişiklik
              gösterebilir. Detaylı bilgi için rezervasyon detaylarınızı
              inceleyin.
            </li>
            <li>
              <b>Uygulama ile İlgili Teknik Sorunlar:</b> Uygulamayı
              güncelleyerek veya cihazınızı yeniden başlatarak sorunu
              çözebilirsiniz. Sorun devam ederse destek ekibimizle iletişime
              geçin.
            </li>
          </ul>
          <br />
          <b>Destek Ekibi</b>
          <br />
          7/24 hizmet veren destek ekibimiz, tüm sorularınız ve sorunlarınız
          için size yardımcı olmaktan memnuniyet duyar. Bize uygulama içinden
          veya iletişim sayfamızdan ulaşabilirsiniz.
          <br />
          <br />
          <b>
            İyi yolculuklar dileriz!
            <br />
            VoyageXpert Ekibi
          </b>
        </Typography>
      </Container>
    </Box>
  );
};

export default Help;

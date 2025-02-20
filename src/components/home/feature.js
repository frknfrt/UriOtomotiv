import React, { useState } from 'react';
import '../../AppStyle.css';

import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/4.png';
import image3 from '../../assets/images/yeni1.png';
import image4 from '../../assets/images/3.png';
import image5 from '../../assets/images/yeni2.png';
import image6 from '../../assets/images/5.png';

import { Row, Col, Modal, Card } from 'antd';
const { Meta } = Card;

const tires = [
  { id: 1, name: "Forklift Lastik", image: image1, description: "Dolgu Lastikler:Havasız ve tamamen kauçuktan üretilmiştir.Delinme riski yoktur ve uzun ömürlüdür.Beton, asfalt gibi sert zeminlerde ve ağır sanayi ortamlarında kullanılır.Bakım gerektirmez, dayanıklıdır, delinme veya patlama riski yoktur." },
  { id: 2, name: "Forklift Lastik", image: image2, description: "Havalı Lastikler (Pneumatic Tires):İçerisinde hava bulunur, klasik otomobil lastikleri gibi şişirilebilir yapıdadır.Açık alanlarda, bozuk ve yumuşak zeminlerde (toprak, çakıl, çamur) tercih edilir.Yüksek darbe emilimi sayesinde daha konforlu bir sürüş sağlar." },
  { id: 3, name: "Forklift Lastik", image: image3, description: "Çemberli Lastikler (Press-on Band Tires):Metal bir çemberin üzerine preslenmiş kauçuk kaplamadan oluşur.Kapalı alanlarda, depo ve fabrikalarda kullanılır.Yüksek taşıma kapasitesine sahiptir, dayanıklıdır ve küçük dönüş çapı sağlar." },
  { id: 4, name: "Forklift Lastik", image: image4, description: "İz Bırakmayan Lastikler (Non-Marking Tires):Kauçuk yapısı özel bileşiklerle üretilir ve zeminde siyah iz bırakmaz.Gıda, ilaç ve temizlik sektörlerinde hijyenin önemli olduğu alanlarda kullanılır.Zemini kirletmez, temiz çalışma ortamları için idealdir." },
  { id: 5, name: "Forklift Lastik", image: image5, description: "Forklift lastikleri, iş makinelerinin performansını doğrudan etkileyen kritik bileşenlerdir. Doğru lastik seçimi, işletmelerin verimliliğini artırır, maliyetlerini düşürür ve güvenliği sağlar.Sonuç olarak, forkliftiniz için doğru lastiği seçmek, hem işletme maliyetlerinizi azaltır hem de çalışma güvenliğinizi artırır!" },
  { id: 6, name: "Forklift Lastik", image: image6, description: "Dolgu lastikler delinme ve patlamaya karşı dayanıklıdır, bakım gerektirmez ve uzun ömürlüdür. Havalı lastikler, esnek yapıları sayesinde darbe emici özellik sunarak sürüş konforunu artırır, ancak patlama riski bulunur. Çemberli lastikler, hızlı ve kolay montaj avantajı sağlarken, ağır yük taşıma kapasitesini artırır. İz bırakmayan lastikler ise özellikle kapalı alanlarda, hijyenin önemli olduğu ortamlarda tercih edilir ve zeminde siyah izler bırakmaz. Forklift lastikleri, güvenli manevra kabiliyeti ve zemin tutuşu sağladığı için kazaların önüne geçmeye yardımcı olur. Ayrıca doğru lastik seçimi, yakıt tüketimini optimize eder ve forkliftin motoruna binen yükü azaltır. Yanlış lastik seçimi ise performans düşüklüğüne, fazla yakıt tüketimine ve güvenlik risklerine yol açabilir. Sonuç olarak, çalışma alanına uygun forklift lastiği kullanmak, hem iş güvenliğini hem de operasyonel verimliliği artırarak işletmelerin uzun vadede maliyet tasarrufu yapmasına katkı sağlar." },
];

function AppFeature() {
  const [selectedTire, setSelectedTire] = useState(null);

  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Kampanyalı Ürünler</h2>
        </div>
        <Row gutter={[16, 16]} justify="center">
          {tires.map((tire) => (
            <Col key={tire.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={tire.name} src={tire.image} />}
                onClick={() => setSelectedTire(tire)}
              >
                <Meta title={tire.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {selectedTire && (
        <Modal
          title={selectedTire.name}
          visible={true}
          onCancel={() => setSelectedTire(null)}
          footer={null}
        >
          <img src={selectedTire.image} alt={selectedTire.name} style={{ width: "100%", borderRadius: "8px" }} />
          <p style={{ marginTop: "16px" }}>{selectedTire.description}</p>
        </Modal>
      )}
    </div>
  );
}

export default AppFeature;

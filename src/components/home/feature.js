import React, { useState } from 'react';
import '../../AppStyle.css';
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/4.png';
import image3 from '../../assets/images/yeni1.png';
import image4 from '../../assets/images/3.png';
import image5 from '../../assets/images/yeni2.png';
import image6 from '../../assets/images/5.png';

import { Row, Col, Card } from 'antd';
const { Meta } = Card;

const tires = [
  { id: 1, name: "Dolgu Lastikler", image: image1, description: "Dolgu forklift lastikleri, hava yerine sağlam dolgu malzemesiyle doldurulmuş lastiklerdir. Bu lastikler, patlama riski olmadan uzun süre dayanıklı olup, zorlu çalışma koşullarında kullanılır. Genellikle inşaat alanları, depolar ve ağır sanayi gibi ortamlarda tercih edilir çünkü bakım gerektirmezler ve dayanıklılık sağlarlar." },
  { id: 2, name: "Havalı Lastikler", image: image2, description: "Havalı forklift lastikleri, içinde hava bulunan ve klasik araç lastikleri gibi şişirilen lastiklerdir. Bu lastikler, daha yumuşak bir sürüş sağlar, zeminle daha iyi temas eder ve titreşimi azaltır. Genellikle iç mekanlarda ve düzgün yüzeylerde çalışan forkliftlerde tercih edilir. Bakım gereksinimleri olabilir, çünkü hava basıncı düzenli olarak kontrol edilmelidir." },
  { id: 3, name: "Çemberli Lastikler", image: image3, description: "Çemberli forklift lastikleri, genellikle sert ve dayanıklı bir metal çember ile desteklenen, iç kısmı sağlam olan lastiklerdir. Bu lastikler, patlamaya karşı dirençli olup, sağlam yapıları sayesinde zorlu koşullarda kullanılabilirler. Çemberli lastikler, özellikle ağır yük taşıyan forkliftlerde tercih edilir. Bu tasarım, lastiğin deforme olmasını engelleyerek, uzun ömürlü ve düşük bakım gereksinimli bir seçenek sunar." },
  { id: 4, name: "İz Bırakmayan Lastikler", image: image4, description: "İz bırakmayan forklift lastikleri, özel bir bileşenle üretilen ve zeminde iz bırakmayan lastiklerdir. Genellikle iç mekanlarda, özellikle temiz yüzeylerde çalışan forkliftlerde kullanılır. Bu lastikler, zemine zarar vermeden güvenli bir şekilde hareket etmeyi sağlar. Özellikle gıda depoları, hastaneler ve temizlik gereksinimi yüksek alanlarda tercih edilir." },
  { id: 5, name: "Doğru Forklift Lastik Seçimi", image: image5, description: "Forklift lastiği seçerken, öncelikle kullanım alanını ve koşullarını göz önünde bulundurmalısınız. İç mekan için iz bırakmayan lastikler, dış mekan için ise daha dayanıklı ve hava koşullarına uygun lastikler tercih edilir. Ayrıca, taşıyacağınız yük miktarı ve forkliftin çalışma şekli de lastik tipini belirler. Havalı lastikler yumuşak sürüş sunarken, dolgu lastikler patlama riskini ortadan kaldırır ve uzun ömürlüdür. Yola göre lastik sertliği ve bakım gereksinimlerini de dikkate alarak, ihtiyaçlarınıza en uygun lastiği seçmelisiniz." },
  { id: 6, name: "Özel Kauçuk Forklift Lastikleri", image: image6, description: "Esnek yapısı sayesinde daha konforlu kullanım sağlar." },
];

function AppFeature() {
  const [selectedTire, setSelectedTire] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (tire) => {
    setSelectedTire(tire);
    setModalVisible(true);
    setClosing(false);
  };

  const handleCloseModal = () => {
    setClosing(true); // Kapanış animasyonunu başlat
    setTimeout(() => {
      setClosing(false); // Animasyon bittikten sonra sıfırla
      setSelectedTire(null); // Seçili lastiği sıfırla
    }, 300); // 300ms sonra modal tamamen kapanacak
  };
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
                onClick={() => handleOpenModal(tire)}
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
    open={true}
    onCancel={handleCloseModal}
    footer={null}
    className={closing ? "closing-animation" : ""}
  >
    <img src={selectedTire.image} alt={selectedTire.name} className="modal-image"/>
    <p style={{ marginTop: "16px" }}>{selectedTire.description}</p>
  </Modal>
)}
    </div>
  );
}

export default AppFeature;

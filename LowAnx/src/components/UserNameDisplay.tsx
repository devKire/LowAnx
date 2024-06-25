import React, { useEffect, useState } from 'react';
import { firebase } from '../services/firebaseConfig'; // Certifique-se de ajustar o caminho conforme necessário

const UserNameDisplay = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      const user = firebase.auth().currentUser;

      if (user) {
        try {
          const userRef = firebase.firestore().collection('users').doc(user.uid);
          const doc = await userRef.get();

          if (doc.exists) {
            const data = doc.data();
            if (data && data.name) {
              setUserName(data.name);
            } else {
              console.error("Nome do usuário não encontrado no documento.");
            }
          } else {
            console.error("Documento do usuário não encontrado.");
          }
        } catch (error) {
          console.error("Erro ao buscar documento:", error);
        }
      } else {
        console.error("Usuário não autenticado.");
      }
    };

    fetchUserName();
  }, []);

  return (
    <p className="card-text">
      {userName ? `Nome de Usuário: ${userName}` : 'Carregando...'}
    </p>
  );
};

export default UserNameDisplay;

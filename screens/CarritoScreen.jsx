import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';

const initialProducts = [
  { id: "1", name: "Laptop Dell pro", price: 1299.99, description: "Una laptop potente para profesionales y creativos.", image: "https://picsum.photos/seed/laptop1/400/300", category: "Electrónica", quantity: 1 },
  { id: "2", name: "Smartphone X", price: 899.99, description: "El último smartphone con la mejor cámara del mercado.", image: "https://picsum.photos/seed/phone2/400/300", category: "Electrónica", quantity: 2 }
];

const IVA_RATE = 0.12;

export default function CarritoScreen() {
  const [products, setProducts] = useState(initialProducts);
  const [totals, setTotals] = useState({ subtotal: 0, iva: 0, total: 0 });
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Calcula totales
  useEffect(() => {
    const subtotal = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    const iva = subtotal * IVA_RATE;
    const total = subtotal + iva;
    setTotals({ subtotal, iva, total });
  }, [products]);

  // Cambiar cantidad
  const handleQuantityChange = (id, newQuantity) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: Math.max(0, newQuantity) } : p
      ).filter(p => p.quantity > 0) // elimina los de cantidad 0
    );
  };

  // Eliminar producto
  const handleRemoveItem = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Finalizar compra
  const handleCheckout = () => {
    setIsConfirmed(true);
    setProducts([]); // limpia carrito
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

      <ScrollView style={{ flex: 1 }}>
        {products.length === 0 ? (
          <Text style={styles.emptyText}>El carrito está vacío.</Text>
        ) : (
          products.map(product => (
            <View key={product.id} style={styles.item}>
              <Image source={{ uri: product.image }} style={styles.image} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{product.name}</Text>
                <Text numberOfLines={2} style={styles.desc}>{product.description}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>

                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={String(product.quantity)}
                  onChangeText={(val) => handleQuantityChange(product.id, parseInt(val) || 0)}
                />
              </View>
              <TouchableOpacity onPress={() => handleRemoveItem(product.id)}>
                <Text style={styles.remove}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      {/* Totales */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: ${totals.subtotal.toFixed(2)}</Text>
        <Text style={styles.summaryText}>IVA (12%): ${totals.iva.toFixed(2)}</Text>
        <Text style={styles.total}>Total: ${totals.total.toFixed(2)}</Text>
      </View>

      {/* Botón de compra */}
      <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
        <Text style={styles.checkoutText}>Realizar Compra</Text>
      </TouchableOpacity>

      {/* Modal de confirmación */}
      <Modal visible={isConfirmed} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.successTitle}>¡Compra Exitosa!</Text>
            <Text style={styles.successMsg}>Tu pedido ha sido procesado.</Text>
            <TouchableOpacity
              style={styles.okBtn}
              onPress={() => setIsConfirmed(false)}
            >
              <Text style={styles.okText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// 🎨 Estilos
  const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12, textAlign: "center" },
  emptyText: { textAlign: "center", color: "gray", marginTop: 40 },
  item: { flexDirection: "row", backgroundColor: "#f3f4f6", borderRadius: 10, padding: 10, marginBottom: 12, alignItems: "center" },
  image: { width: 70, height: 70, marginRight: 10, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: "600" },
  desc: { fontSize: 12, color: "gray", marginVertical: 2 },
  price: { fontSize: 14, fontWeight: "bold", color: "#4f46e5" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, width: 60, textAlign: "center", marginTop: 6, padding: 4 },
  remove: { color: "red", fontWeight: "600", marginLeft: 10 },
  summary: { borderTopWidth: 1, borderColor: "#e5e7eb", paddingVertical: 10, marginTop: 5 },
  summaryText: { fontSize: 16, marginVertical: 2 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 6 },
  checkoutBtn: { backgroundColor: "#4f46e5", padding: 14, borderRadius: 30, marginTop: 10, alignItems: "center" },
  checkoutText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", alignItems: "center" },
  modalBox: { backgroundColor: "#fff", padding: 24, borderRadius: 12, width: "80%", alignItems: "center" },
  successTitle: { fontSize: 20, fontWeight: "bold", color: "green", marginBottom: 10 },
  successMsg: { fontSize: 14, textAlign: "center", marginBottom: 20 },
  okBtn: { backgroundColor: "#4f46e5", paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20 },
  okText: { color: "#fff", fontWeight: "bold" }
});



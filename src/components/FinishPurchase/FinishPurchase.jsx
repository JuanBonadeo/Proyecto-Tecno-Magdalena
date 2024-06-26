import '../FinishPurchase/FinishPurchase.css';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import '../Button/button.css';
import Swal from 'sweetalert2';


const FinishPurchase = () => {
    const useCart = () => {
        return useContext(CartContext)
    }
    const { cart, total, calcularDescuento, formatearMoneda, clearCart2 } = useCart();

    const precioEnvio = 5000;
    const precioEnvioGratis = 50000;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [entrega, setEntrega] = useState('envio');
    let [totalFinal, setTotalFinal] = useState(total);

    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setEntrega(selectedOption);
        if (selectedOption === 'envio') {
            setTotalFinal(total );
        } else {
            setTotalFinal(total);
        }
    };
    

    const buyCart = (e) => {
        const nombre = document.getElementById('name').value;
        const pago = document.getElementById('payment').value;
        const domicilio = document.getElementById('address').value;
        e.preventDefault();
        Swal.fire({
            title: 'Confirmar compra',
            text: '¿Estás seguro de que deseas realizar la compra? Seras redirigido a WhatsApp para completar la compra.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                let mensajePedido = 'Nombre y Apellido: ' + nombre + '\n';
                mensajePedido += 'Metodo de Pago: ' + pago + '\n';
                mensajePedido += 'Metodo de Entrega: ' + entrega + '\n';
                if (entrega === 'envio') {
                    mensajePedido += 'Domicilio: ' + domicilio + '\n';
                    mensajePedido += 'Costo de envio:  consultar '  + ' (envio gratis a partir de 30000)\n';
                    totalFinal = total + ' coste de envio';
                }
                mensajePedido += 'pedido:\n';
                cart.forEach((prod) => {
                    mensajePedido += `*${prod.nombre}*  Cantidad: *${prod.quantity}* Precio: *${calcularDescuento(prod.precio * prod.quantity, prod.descuento)}*\n`;
                });
                 if (entrega === 'envio' && total ) {
                    mensajePedido += `\nTotal sin coste de envio: *${formatearMoneda(total)}*`;
                } else mensajePedido += `\nTotal: *${formatearMoneda(total)}*`;

                // Completar con el número de WhatsApp
                const numeroWhatsApp = '5491157182967';

                function esDispositivoMovil() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

                // Construir la URL de WhatsApp
                let urlWhatsApp = '';

                if (esDispositivoMovil()) {
                    // Si es un dispositivo móvil, abrir en la aplicación de WhatsApp
                    urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePedido)}`;
                } else {
                    // Si es una computadora, abrir en WhatsApp Web
                    urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePedido)}`;
                }

                // Abrir la ventana de chat
                window.open(urlWhatsApp, '_blank');
                window.open(urlWhatsApp, '_blank');
                clearCart2();
                const redirectHome = () => {
                    window.location.href = "/#/gracias";
                };
                redirectHome();
            }
        });

    }
    return (
        <div className="containerP">
            <h1>Completa tu Pedido</h1>
            <form onSubmit={(e) => { e.preventDefault(); buyCart(e); }}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre y Apellido:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor='payment'>Método de Pago:</label>
                        <select name="payment" id="payment" required>
                            <option value="transferencia">Transf. Bancaria</option>
                            <option value="efectivo">Efectivo</option>
                            <option value="tarjeta">Tarjeta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='entrega'>Método de Entrega</label>
                        <select name="entrega" id="entrega" required value={entrega} onChange={handleChange} >
                            <option value="envio">Envío a Domicilio</option>
                            <option value="retiro">Retiro en Local</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Domicilio:</label>
                        <input type="text" id="address" name="address" required />
                    </div>
                </div>

                <h4>Total: {`${formatearMoneda(total)} ${entrega === 'envio'  ? ` + coste de envio` : ''}`}
                 </h4>
            
                <button className="Button" type='submit'>Comprar</button>
            </form>
        </div>
    );
}

export default FinishPurchase;
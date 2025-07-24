import type { ApiProduct, ProductFilter } from '../types/product';

const API_BASE_URL = 'https://agnegocio.net/alaskacool/api/v2/productos';

export class ProductService {
  static async getProducts(filters: ProductFilter = {}): Promise<ApiProduct[]> {
    try {
      const params = new URLSearchParams();
      
      if (filters.brand) {
        params.append('pr_buscar', filters.brand);
      }
      
      const url = `${API_BASE_URL}${params.toString() ? `?${params.toString()}` : ''}`;
      
      const response = await fetch(url, {
        headers: {
          'auth-token': 'qjICtGMK6ntMQvbZHB6A3Qtt',
          'user-email': 'lzepeda@alaska-cool.com'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  static async getProductsByBrand(brand: string): Promise<ApiProduct[]> {
    return this.getProducts({ brand });
  }

  static extractBTU(displayName: string): string {
    const btuMatch = displayName.match(/(\d+)\s*K?\s*BTU/i);
    if (btuMatch) {
      const btu = parseInt(btuMatch[1]);
      if (btu < 100) {
        return `${btu * 1000}`;
      }
      return btu.toString();
    }
    return '';
  }

  static extractVoltage(displayName: string): string {
    const voltageMatch = displayName.match(/(\d+)V/i);
    return voltageMatch ? `${voltageMatch[1]}V` : '';
  }

  static categorizeProduct(product: ApiProduct): string {
    const category = product.categoria_producto_nombre.toLowerCase();
    const type = product.tipo_producto_nombre.toLowerCase();
    
    if (category.includes('climatizacion') || category.includes('aires')) {
      if (type.includes('ventil')) {
        return 'fan';
      } else if (this.extractBTU(product.display_name)) {
        const btu = parseInt(this.extractBTU(product.display_name));
        return btu >= 36000 ? 'industrial' : 'residential';
      }
      return 'residential';
    }
    
    return 'residential';
  }

  static getTotalStock(product: ApiProduct): number {
    return product.existencias_por_bodega.reduce((total, stock) => {
      return total + parseFloat(stock.numero_de_existencias_en_bodega || '0');
    }, 0);
  }

  static getMainStock(product: ApiProduct): ProductStock | null {
    const mainWarehouse = product.existencias_por_bodega.find(stock => 
      stock.nombre.includes('CENTRAL') || stock.bodega_id === 1
    );
    return mainWarehouse || product.existencias_por_bodega[0] || null;
  }

  static formatPrice(price: string): string {
    const numPrice = parseFloat(price);
    if (numPrice === 0) return 'Consultar precio';
    return new Intl.NumberFormat('es-NI', {
      style: 'currency',
      currency: 'NIO'
    }).format(numPrice);
  }
}

export interface ProductStock {
  bodega_id: number;
  nombre: string;
  numero_de_existencias_en_bodega: string;
  numero_de_existencias_actuales: string;
}
export interface ProductStock {
  bodega_id: number;
  nombre: string;
  numero_de_existencias_en_bodega: string;
  numero_de_existencias_actuales: string;
}

export interface ApiProduct {
  producto_id: number;
  display_name: string;
  precio_venta: string;
  prod_codigo: string;
  exento_factura_de_vents: boolean;
  es_servicio: boolean;
  es_receta: boolean;
  tipo_de_multiprecio: string | null;
  tiene_uuid: boolean;
  unidad_medida_nombre: string;
  categoria_producto_nombre: string;
  clase_producto_nombre: string;
  tipo_producto_nombre: string;
  existencias_por_bodega: ProductStock[];
  centro_de_costos: any[];
}

export interface ProductFilter {
  brand?: string;
  category?: string;
  voltage?: string;
  btu?: string;
}

export type BrandKey = 'tempblue' | 'rheem' | /* 'midea' | */ 'comfortstar';

export interface BrandInfo {
  name: string;
  apiParam: string;
  colorBrand: string;
  logo: string;
}

export const brandMapping: Record<BrandKey, BrandInfo> = {
  tempblue: {
    name: 'TempBlue',
    apiParam: 'tempblue',
    colorBrand: 'bg-gradient-to-r from-emerald-600 to-sky-400',
    logo: '/brands/tempblue_logo.webp'
  },
  rheem: {
    name: 'Rheem',
    apiParam: 'rheem',
    colorBrand: 'bg-gradient-to-r from-red-600 to-red-400',
    logo: '/brands/rheem/rheem_logo.webp'
  },
  /* midea: {
    name: 'Midea',
    apiParam: 'midea',
    colorBrand: 'bg-gradient-to-r from-sky-500 to-blue-500',
    logo: '/brands/midea_logo.webp'
  }, */
  comfortstar: {
    name: 'ComfortStar',
    apiParam: 'comfortstar',
    colorBrand: 'bg-gradient-to-r from-blue-600 to-sky-400',
    logo: '/brands/comfortstar_logo.webp'
  }
};
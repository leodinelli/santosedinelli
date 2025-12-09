import React, { useState } from 'react';
import { Calculator as CalcIcon, Thermometer, Users, Sun, Lightbulb, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [formData, setFormData] = useState({
    length: '',
    width: '',
    height: '2.7',
    people: '2',
    windows: '1',
    sunExposure: 'medium',
    appliances: '2',
    roomType: 'bedroom'
  });

  const [result, setResult] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateBTU = () => {
    const { length, width, height, people, windows, sunExposure, appliances, roomType } = formData;
    
    if (!length || !width) {
      alert('Por favor, preencha as dimensões do ambiente');
      return;
    }

  
    const area = parseFloat(length) * parseFloat(width);
    let baseBTU = area * 600; 

    
    const heightFactor = parseFloat(height) > 2.7 ? 1.1 : 1;
    baseBTU *= heightFactor;

    
    const peopleCount = parseInt(people);
    baseBTU += (peopleCount - 1) * 600;

    
    const windowCount = parseInt(windows);
    baseBTU += windowCount * 600;

    
    const sunFactors = {
      low: 1,
      medium: 1.1,
      high: 1.2
    };
    baseBTU *= sunFactors[sunExposure];

   
    const applianceCount = parseInt(appliances);
    baseBTU += applianceCount * 300;

    
    const roomFactors = {
      bedroom: 1,
      living: 1.1,
      kitchen: 1.3,
      office: 1.2
    };
    baseBTU *= roomFactors[roomType];

    
    const standardBTUs = [9000, 12000, 18000, 24000, 30000, 36000, 48000, 60000];
    const recommendedBTU = standardBTUs.find(btu => btu >= baseBTU) || 60000;

    
    const priceTable = {
      9000: 1750,   
      12000: 2150,  
      18000: 2600,  
      24000: 3300, 
      30000: 4000,  
      36000: 4850,  
      48000: 6000,  
      60000: 7500   
    };

    setResult({
      area,
      calculatedBTU: Math.round(baseBTU),
      recommendedBTU,
      efficiency: recommendedBTU <= baseBTU * 1.2 ? 'Ideal' : 'Superdimensionado'
    });

    
    const productRecommendations = [
      {
        name: `Ar Condicionado Split ${recommendedBTU.toLocaleString()} BTUs`,
        btus: recommendedBTU,
        price: priceTable[recommendedBTU] || recommendedBTU * 0.2,
        efficiency: 'A',
        type: 'Inverter'
      }
    ];

    setRecommendations(productRecommendations);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <CalcIcon className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Calculadora de BTUs
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              Descubra a potência ideal para seu ambiente em poucos cliques
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Dados do Ambiente
            </h2>

            <div className="space-y-6">
              {/* Dimensions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dimensões do Ambiente
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="number"
                      placeholder="Comprimento (m)"
                      value={formData.length}
                      onChange={(e) => handleInputChange('length', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Largura (m)"
                      value={formData.width}
                      onChange={(e) => handleInputChange('width', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pé Direito (altura)
                </label>
                <select
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="2.4">2,4m</option>
                  <option value="2.7">2,7m (padrão)</option>
                  <option value="3.0">3,0m</option>
                  <option value="3.5">3,5m ou mais</option>
                </select>
              </div>

              {/* People */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Número de Pessoas
                </label>
                <select
                  value={formData.people}
                  onChange={(e) => handleInputChange('people', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="1">1 pessoa</option>
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                  <option value="5">5+ pessoas</option>
                </select>
              </div>

              {/* Windows */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Janelas
                </label>
                <select
                  value={formData.windows}
                  onChange={(e) => handleInputChange('windows', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="0">Nenhuma</option>
                  <option value="1">1 janela</option>
                  <option value="2">2 janelas</option>
                  <option value="3">3+ janelas</option>
                </select>
              </div>

              {/* Sun Exposure */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Sun className="inline h-4 w-4 mr-1" />
                  Exposição Solar
                </label>
                <select
                  value={formData.sunExposure}
                  onChange={(e) => handleInputChange('sunExposure', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="low">Pouca (Norte/Sul)</option>
                  <option value="medium">Média</option>
                  <option value="high">Muita (Leste/Oeste)</option>
                </select>
              </div>

              {/* Appliances */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Monitor className="inline h-4 w-4 mr-1" />
                  Eletrodomésticos
                </label>
                <select
                  value={formData.appliances}
                  onChange={(e) => handleInputChange('appliances', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="0">Nenhum</option>
                  <option value="1">Poucos (TV, notebook)</option>
                  <option value="2">Médio (TV, computador)</option>
                  <option value="3">Muitos (vários equipamentos)</option>
                </select>
              </div>

              {/* Room Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Ambiente
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => handleInputChange('roomType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="bedroom">Quarto</option>
                  <option value="living">Sala de Estar</option>
                  <option value="kitchen">Cozinha</option>
                  <option value="office">Escritório</option>
                </select>
              </div>

              <button
                onClick={calculateBTU}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <CalcIcon className="h-5 w-5 mr-2" />
                Calcular BTUs
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {result && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Resultado do Cálculo
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Área do ambiente:</span>
                    <span className="font-semibold text-blue-600">{result.area.toFixed(1)} m²</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700">BTUs calculados:</span>
                    <span className="font-semibold text-green-600">
                      {result.calculatedBTU.toLocaleString()} BTUs
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="text-gray-700">BTUs recomendados:</span>
                    <span className="font-bold text-purple-600 text-xl">
                      {result.recommendedBTU.toLocaleString()} BTUs
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Eficiência:</span>
                    <span className={`font-semibold ${
                      result.efficiency === 'Ideal' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {result.efficiency}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Dica Importante</h4>
                      <p className="text-yellow-700 text-sm mt-1">
                        Este cálculo é uma estimativa. Para ambientes com características especiais, 
                        recomendamos uma consultoria técnica gratuita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {recommendations.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Produtos Recomendados
                </h2>

                <div className="space-y-4">
                  {recommendations.map((product, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Potência:</span>
                          <div className="font-semibold">{product.btus.toLocaleString()} BTUs</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Eficiência:</span>
                          <div className="font-semibold text-green-600">Selo {product.efficiency}</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-lg font-bold text-gray-900">
                          A partir de {formatPrice(product.price)}
                        </div>
                        <div className="text-sm text-green-600">
                          ou {formatPrice(product.price * 0.9)} no PIX
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/produtos"
                  className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Ver Produtos Disponíveis
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            )}

            {/* Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Como Funciona o Cálculo?
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <Thermometer className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Área base:</strong> 600 BTUs por m²
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Pessoas:</strong> +600 BTUs por pessoa adicional
                  </div>
                </div>
                <div className="flex items-start">
                  <Sun className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Exposição solar:</strong> Ajuste de 0% a 20%
                  </div>
                </div>
                <div className="flex items-start">
                  <Monitor className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Equipamentos:</strong> +300 BTUs por aparelho
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;


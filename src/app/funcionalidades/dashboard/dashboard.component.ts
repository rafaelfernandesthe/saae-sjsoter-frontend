import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // Filtros
  meses = [
    { nome: 'Janeiro', valor: 1 },
    { nome: 'Fevereiro', valor: 2 },
    { nome: 'Março', valor: 3 },
    { nome: 'Abril', valor: 4 },
    { nome: 'Maio', valor: 5 },
    { nome: 'Junho', valor: 6 },
    { nome: 'Julho', valor: 7 },
    { nome: 'Agosto', valor: 8 },
    { nome: 'Setembro', valor: 9 },
    { nome: 'Outubro', valor: 10 },
    { nome: 'Novembro', valor: 11 },
    { nome: 'Dezembro', valor: 12 },
  ];
  mesSelecionado = new Date().getMonth() + 1;
  anoSelecionado = new Date().getFullYear();

  // Indicadores
  numeroImoveis = 0;
  numeroImoveisIsentos = 0;
  numeroFaturasGeradas = 0;
  numeroOrdensAbertas = 0;

  // Gráficos
  graficoValores: Chart | null = null;
  graficoStatus: Chart | null = null;
  graficoFaturas: Chart | null = null;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.atualizarDashboard();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Não recrie os gráficos aqui, pois eles já são criados no atualizarDashboard
    }
  }

  atualizarDashboard(): void {
    // Simulação de dados (substituir por chamadas ao backend)
    this.numeroImoveis = 120;
    this.numeroImoveisIsentos = 15;
    this.numeroFaturasGeradas = 105;
    this.numeroOrdensAbertas = 20;

    // Atualizar gráficos
    this.destruirGraficos();
    this.criarGraficoValores();
    this.criarGraficoStatus();
    this.criarGraficoFaturas();
  }

  destruirGraficos(): void {
    if (this.graficoValores) {
      this.graficoValores.destroy();
      this.graficoValores = null;
    }
    if (this.graficoStatus) {
      this.graficoStatus.destroy();
      this.graficoStatus = null;
    }
    if (this.graficoFaturas) {
      this.graficoFaturas.destroy();
      this.graficoFaturas = null;
    }
  }

  criarGraficoValores(): void {
    const canvas = this.renderer.selectRootElement('#graficoValores', true);
    this.graficoValores = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Pendentes/Vencidos', 'Pagos'],
        datasets: [
          {
            label: 'Valores (R$)',
            data: [5000, 8000], // Simulação de valores
            backgroundColor: ['#FFA726', '#66BB6A'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  criarGraficoStatus(): void {
    const canvas = this.renderer.selectRootElement('#graficoStatus', true);
    this.graficoStatus = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'], // Simulação de meses
        datasets: [
          {
            label: 'Pagas',
            data: [30, 40, 50, 60],
            backgroundColor: '#66BB6A',
          },
          {
            label: 'Pendentes',
            data: [20, 15, 10, 5],
            backgroundColor: '#FFA726',
          },
          {
            label: 'Vencidas',
            data: [10, 5, 15, 20],
            backgroundColor: '#EF5350',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
        },
      },
    });
  }

  criarGraficoFaturas(): void {
    const canvas = this.renderer.selectRootElement('#graficoFaturas', true);
    this.graficoFaturas = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'], // Simulação de meses
        datasets: [
          {
            label: 'Faturas Geradas',
            data: [100, 120, 110, 130],
            borderColor: '#42A5F5',
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
        },
      },
    });
  }
}

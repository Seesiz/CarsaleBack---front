import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GeneraliserService } from '../service/generaliser.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  chartOptions = {};
  allAnnee: any[] = [];
  statistique: any[] = [];
  init: boolean = false;
  constructor(private genericService: GeneraliserService) {}

  async changeGraph(event: any) {
    this.init = false;
    const annee = event.target.value;
    this.statistique[0] = 0;
    this.statistique[1] = 0;
    this.statistique[2] = 0;
    this.statistique[3] = 0;
    this.statistique[4] = 0;
    this.statistique[5] = 0;
    this.statistique[6] = 0;
    this.statistique[7] = 0;
    this.statistique[8] = 0;
    this.statistique[9] = 0;
    this.statistique[10] = 0;
    this.statistique[11] = 0;
    try {
      const statistique = (
        await this.genericService.getAll(
          `statutVoitures/statistiquevente/${annee}`
        )
      ).data as any[];
      for (let item of statistique) {
        const date = new Date(item.dateStatut);
        this.statistique[date.getMonth()] += 1;
      }
      this.initGraph();
      this.init = true;
    } catch (error) {
      alert(error);
    }
  }

  initGraph() {
    this.chartOptions = {
      title: {
        text: '',
      },
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      axisY: {
        includeZero: true,
      },
      data: [
        {
          type: 'line',
          indexLabel: '{y}',
          color: '#ff512f',
          dataPoints: [
            { label: 'Janvier', y: this.statistique[0] },
            { label: 'Fevrier', y: this.statistique[1] },
            { label: 'Mars', y: this.statistique[2] },
            { label: 'Avril', y: this.statistique[3] },
            { label: 'Mai', y: this.statistique[4] },
            { label: 'Juin', y: this.statistique[5] },
            { label: 'Juillet', y: this.statistique[6] },
            { label: 'Aout', y: this.statistique[7] },
            { label: 'Septembre', y: this.statistique[8] },
            { label: 'Octobre', y: this.statistique[9] },
            { label: 'Novembre', y: this.statistique[10] },
            { label: 'Decembre', y: this.statistique[11] },
          ],
        },
      ],
    };
  }

  async ngOnInit() {
    await this.getAllAnnee();
    await this.changeGraph({
      target: { value: this.allAnnee[0] ? this.allAnnee[0] : 0 },
    });
  }

  async getAllAnnee() {
    try {
      this.allAnnee = await this.genericService.getAll(
        'statutVoitures/listAllAnnee'
      );
    } catch (error) {
      alert(error);
    }
  }
}

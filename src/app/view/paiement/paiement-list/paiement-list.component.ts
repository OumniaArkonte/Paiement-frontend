import {Component, OnInit} from '@angular/core';
import {PaiementService} from "../../../controller/service/paiement.service";
import {Paiement} from "../../../controller/model/paiement.model";

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.css']
})
export class PaiementListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }

  constructor(private paiementService:PaiementService) {
  }


  public findAll():void{
    this.paiementService.findAll().subscribe(
      data => this.paiements = data
    );
  }



  get paiement(): Paiement {
    return this.paiementService.paiement;
  }

  set paiement(value: Paiement) {
    this.paiementService.paiement = value;
  }

  get paiements(): Array<Paiement> {
    return this.paiementService.paiements;
  }

  set paiements(value: Array<Paiement>) {
    this.paiementService.paiements = value;
  }
  public delete(p: Paiement) {
    this.paiementService.deleteByReference(p.code).subscribe(
      data => {
        let index = this.paiements.findIndex(e => p.code == e.code);
        this.paiements.splice(index, 1);
      }
    );
  }

}

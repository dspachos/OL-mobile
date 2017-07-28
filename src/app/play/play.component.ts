import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit, OnDestroy {
	id: number;
	choice: number=0;
	entry: any;
	sub: any;
  	nodes: Array<any>;
  	pathway: Array<any>=[];
  	node: Array<any>;
  	progress: number;

  constructor(
  	private http: HttpClient,	
  	private route: ActivatedRoute	
  	) {}

	goToAction(){
		this.node = this.nodes.find( item => item.id==this.choice );
		this.pathway.push(this.node); // push the node in the pathway
	}

	onSelectionChange(entry: any){
		this.choice=entry;
	}


	ngOnInit() {
		    // this.sub = this.route.params.subscribe(params => {
	     //   this.id = +params['id']; // (+) converts string 'id' to a number
	       console.log('Play!!!');
	       this.sub = this.http.get('assets/vps/1/data.json')
	       .subscribe(data => {
			      // Read the result field from the JSON response.
			      console.log( data['nodes'] );
			      this.nodes = data["nodes"];
			      this.node = data["nodes"][0];
				  this.pathway.push(this.node); // push the node in the pathway
			    });
		}
	    

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}//end class 


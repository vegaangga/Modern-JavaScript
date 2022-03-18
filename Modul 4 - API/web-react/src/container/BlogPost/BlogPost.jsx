import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component {

    state = {               //komponen state dari react untuk statefull component
        listArtikel: [],     //variabel array yang digunakan untuk menyimpan data API
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts?_sort=id&_order=desc') // alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())      // ubah response data dari url API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {        // data json hasil ambil dari API kita masukan ke dalam listArtkel pada state
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {   //komponen untuk mengecek ketika komponen telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI();
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-artikel">
                 <div className="row">
                 <div className="col-sm">
                        <div id="form-artikel" className="form pb-2">
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                                <div className="col-sm-8">
                                    <textarea type="text" className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className="col-sm">
                    <h2>Daftar Artikel</h2>{
                    this.state.listArtikel.map(artikel => {     // looping dan masukan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} /> // mappingkan data json dari API sesuai kategorinya
                    })
                }
                    </div>
                </div>

            </div>
        )
    }
}

export default BlogPost;


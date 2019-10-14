package br.com.seguirapp.BO;


import br.com.seguirapp.model.Localizacao;
import br.com.seguirapp.repository.LocalizacaoRepository;
import br.com.seguirapp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class LocalizacaoBO {

    @Autowired
    private LocalizacaoRepository localizacaoDAO;

    public LocalizacaoBO(LocalizacaoRepository localizacaoDAO) {
        this.localizacaoDAO = localizacaoDAO;
    }

    public Localizacao createLocalizacao(Localizacao localizacao) throws Exception {
        return localizacaoDAO.save(localizacao);
    }

    public Localizacao findById(int id) {
        return localizacaoDAO.findById(id).get();
    }

    public List<Localizacao> findAll(){
        return localizacaoDAO.findAll();
    }

    public List<String> findByDisp(int id) throws Exception{
        return localizacaoDAO.getLocalizacao(id);
    }
}

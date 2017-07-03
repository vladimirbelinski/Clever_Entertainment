/* Arquivo: banco.js
   Autor: Vladimir Belinski
   Descrição: o presente arquivo faz parte da resolução do segundo trabalho do CCR Tópicos Especiais em Desenvolvimento Web,
 			  CC-UFFS 2017.1, ministrado pela professora Ma. Andressa Sebben. Nele podem ser encontradas configurações acerca
			  do banco, suas coleções, permissões...
*/
import {
	Mongo
} from 'meteor/mongo';

// Coleção dos fanarts
Images = new Mongo.Collection("Images");

// Coleção das submissões para audições
Auditions = new Mongo.Collection("Auditions");

// Permissões sobre a coleção Images
Images.allow({
	// Permissões sobre operações de inserção
	insert: function (userId, doc) {
		// Verificação de usuário logado
		if (Meteor.user()) {
			if (userId != doc.createdBy) return false;
			else return true;
		} else return false;
	},
	// Permissões sobre operações de remoção
	remove: function (userId, doc) {
		// Verificação de usuário logado
		if (Meteor.user()) {
			if (userId != doc.createdBy) return false;
			else return true;
		} else return false;
	},
	// Permissões sobre operações de atualização
	update: function (userId, doc) {
		// Verificação de usuário logado
		if (Meteor.user()) {
			if (userId != doc.createdBy) return false;
			else return true;
		} else return false;
	},
});

// Permissões sobre a coleção Auditions
Auditions.allow({
	// Permissões sobre operações de inserção
	insert: function () {
		return true;
	},
});

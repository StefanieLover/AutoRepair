package com.stefanie.autorepair.model.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;
import org.hibernate.type.NullableType;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class CommonDao extends HibernateDaoSupport {

	@SuppressWarnings("rawtypes")
	public List querySqlToList(final String sql, final Map<String, NullableType> scalars, final Integer index,
			final Integer count, final Object... objects) {
		return getHibernateTemplate().executeFind(new HibernateCallback<Object>() {

			@Override
			public Object doInHibernate(Session session) throws HibernateException, SQLException {
				// TODO Auto-generated method stub
				SQLQuery query = session.createSQLQuery(sql);
				if (objects != null) {
					for (int i = 0; i < objects.length; i++) {
						query.setParameter(i, objects[i]);
					}
				}
				if (index != null && count != null) {
					query.setMaxResults(count);
					query.setFirstResult(index);
				}
				query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
				if (scalars != null) {
					for (String key : scalars.keySet()) {
						query.addScalar(key, scalars.get(key));
					}
				}
				return query.list();
			}
		});
	}

	public Object querySqlToObject(final String sql, final Object... objects) {
		return getHibernateTemplate().executeFind(new HibernateCallback<Object>() {

			@Override
			public Object doInHibernate(Session session) throws HibernateException, SQLException {
				// TODO Auto-generated method stub
				Query query = session.createSQLQuery(sql);
				if (null != objects) {
					for (int i = 0; i < objects.length; i++) {
						query.setParameter(i, objects[i]);
					}
				}
				return query.uniqueResult();
			}

		});
	}

	public Object customExecute(final String sql, final Object... objects) {
		return getHibernateTemplate().execute(new HibernateCallback<Object>() {

			@Override
			public Object doInHibernate(Session session) throws HibernateException, SQLException {
				// TODO Auto-generated method stub
				Query query = session.createQuery(sql);
				if (null != objects) {
					for (int i = 0; i < objects.length; i++) {
						query.setParameter(i, objects[i]);
					}
				}
				return query.executeUpdate();
			}

		});
	}

	public Map<String, Object> querySqlToMap(final String sql, final Object... objects) {
		return getHibernateTemplate().execute(new HibernateCallback<Map<String, Object>>() {

			@SuppressWarnings("unchecked")
			@Override
			public Map<String, Object> doInHibernate(Session session) throws HibernateException, SQLException {
				// TODO Auto-generated method stub
				Query query = session.createQuery(sql);
				if (null != objects) {
					for (int i = 0; i < objects.length; i++) {
						query.setParameter(i, objects[i]);
					}
				}
				query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
				return (Map<String, Object>) query.uniqueResult();
			}

		});
	}
}

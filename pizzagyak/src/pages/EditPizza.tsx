import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { ToastContainer, toast } from "react-toastify";
import "../styles/edit.css";

function EditPizza() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const statePizza = (location.state as { pizza?: Pizza } | null)?.pizza;

  const [pizza, setPizza] = useState<Pizza | null>(statePizza ?? null);
  const [loading, setLoading] = useState<boolean>(!statePizza);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    toast.info("Edit pizza page loaded successfully!");
    toast.warning("Make sure to save your changes before leaving!");
  }, []);

  useEffect(() => {
    if (!pizza && id) {
      setLoading(true);
      apiClient
        .get(`/pizzak/${id}`)
        .then((res: { data: any }) => setPizza(res.data))
        .catch((err) => alert(err))
        .finally(() => setLoading(false));
    }
  }, [id, pizza]);

  if (loading || !pizza) return <div>Loading...</div>;

  function updateField<K extends keyof Pizza>(key: K, value: Pizza[K]) {
    setPizza((p) => (p ? { ...p, [key]: value } : p));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!pizza || !id) return;
    setSaving(true);
    try {
      await apiClient.put(`/pizzak/${id}`, {
        nev: pizza.nev,
        leiras: pizza.leiras,
        ar: pizza.ar,
        imageUrl: pizza.imageUrl,
      });
      navigate(`/pizza/${id}`, { state: { pizza } });
    } catch (err) {
      alert(err);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <h1>Edit {pizza.nev}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              value={pizza.nev}
              onChange={(e) => updateField("nev", e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description
            <textarea
              value={pizza.leiras}
              onChange={(e) => updateField("leiras", e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price (Ft)
            <input
              type="number"
              value={pizza.ar}
              onChange={(e) => updateField("ar", Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Image URL (filename)
            <input
              value={pizza.imageUrl}
              onChange={(e) => updateField("imageUrl", e.target.value)}
            />
          </label>
          <div>
            <img
              src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
              alt={pizza.nev}
              width="200"
            />
          </div>
        </div>
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>
        <button type="button" onClick={() => navigate(-1)} disabled={saving}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditPizza;

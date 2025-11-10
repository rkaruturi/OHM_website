import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  description: string;
  display_order: number;
}

export default function LeadershipManager() {
  const [members, setMembers] = useState<LeadershipMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<LeadershipMember>>({
    name: '',
    role: '',
    description: '',
    display_order: 0,
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('leadership_team')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setMembers(data || []);
    } catch (error) {
      console.error('Error fetching leadership team:', error);
      alert('Failed to load leadership team');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (member: LeadershipMember) => {
    setEditingId(member.id);
    setFormData(member);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      name: '',
      role: '',
      description: '',
      display_order: 0,
    });
  };

  const handleSave = async () => {
    try {
      if (editingId && editingId !== 'new') {
        const { error } = await supabase
          .from('leadership_team')
          .update(formData)
          .eq('id', editingId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('leadership_team')
          .insert([formData]);

        if (error) throw error;
      }

      await fetchMembers();
      handleCancel();
      alert('Leadership team member saved successfully!');
    } catch (error) {
      console.error('Error saving leadership member:', error);
      alert('Failed to save leadership member');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;

    try {
      const { error } = await supabase
        .from('leadership_team')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchMembers();
      alert('Leadership team member deleted successfully!');
    } catch (error) {
      console.error('Error deleting leadership member:', error);
      alert('Failed to delete leadership member');
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading leadership team...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Manage Leadership Team</h2>
        {!editingId && (
          <button
            onClick={() => setEditingId('new')}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Team Member
          </button>
        )}
      </div>

      {editingId && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingId === 'new' ? 'Add New Team Member' : 'Edit Team Member'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., CEO, Founder, Plant Manager"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., US-based, Engineer, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Display Order
              </label>
              <input
                type="number"
                value={formData.display_order}
                onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-medium mt-1">{member.role}</p>
                <p className="text-gray-600 mt-1">{member.description}</p>
                <div className="mt-2 text-sm text-gray-500">Order: {member.display_order}</div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(member)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {members.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No team members yet. Click "Add Team Member" to create one.
        </div>
      )}
    </div>
  );
}
